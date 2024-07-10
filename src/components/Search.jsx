import { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/components/Search.css'
import { createAutocomplete } from '@algolia/autocomplete-core'
import Link from 'next/link'
import PatientButton from './PatientButton'
import getPatients from '@/functions/getPatients'
import { UserAuth } from '@/context/AuthContext'

const AutocompleteItem = ({ patientId, title, subtitle}) => {

  return (
    <li>
      <Link href={`/patients/${patientId}`}>
          <PatientButton title={title} subtitle={subtitle} />
      </Link>
    </li>
  )
}

export default function Search (props) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const [patients, setPatients] = useState([])

  const { user } = UserAuth()
  const doctorId = user.uid  

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Buscar paciente por cédula',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'patients-next-api',
      getItems: ({ query }) => {
        if (!!query) {
          const results = patients.filter((patient) => {
            const { identification } = patient;
            return identification.includes(query);
          });
          return results
      }
    }}],
    ...props
  }), [props])

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })


  const initialPatientsGetting = async () => {
    const data = await getPatients(doctorId)
    setPatients(data)
  }

  useEffect(() => {    
    initialPatientsGetting()
  }, [])

  return (
    <form ref={formRef} className="search-form" {...formProps}>
      <div className="search-bar--container">
        <input ref={inputRef} className='search-input' {...inputProps} />
      {
        autocompleteState.isOpen && (
          <div className="patients-results--container" ref={panelRef} {...autocomplete.getPanelProps()}>
            {autocompleteState.collections.map((collection, index) => {
              const { items } = collection
              return (
                <section key={`section-${index}`} className='patient-results' >
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {
                        items.map(item => <AutocompleteItem key={item.identification} {...item} patientId={item.identification} title={item.name} subtitle={item.identification} />)
                      }
                    </ul>
                  )}
                </section>
              )
            })}
          </div>
        )
      }
      </div>
    </form>
  )
}