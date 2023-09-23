import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import CustomSnackbar from '../../utilities/SnackBar'

export default function Clinics() {

  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [clinics, setClinics] = useState([])
  const [searchClinic, setSearchClinic] = useState('')
  const [filteredClinic, setFilteredClinic] = useState([])

  const [inputClinics, setInputClinics] = useState({})
  const [selectedClinics, setSelectedClinics] = useState([])

  const [editableClinic, setEditableClinic] = useState([])

  console.log(inputClinics)
  // add exam clinics
  const addClinics = (e) => {
    e.preventDefault();
    setLoading(true)

    axios.post('/api/level_1/clinics', inputClinics).then(res => {
      if (res.status === 200) {
        getClinics()
        setSuccess(res.data.message)
        setLoading(false)
        setTimeout(() => { setSuccess('') }, 5000)
      } else {
        setError(res.data.message)
        setLoading(false)
        setTimeout(() => { setError('') }, 5000)
      }
    }).catch(err => {
      setError(err.response.data.message)
      setLoading(false)
      setTimeout(() => { setError('') }, 5000)
    });
  }

  // get exam clinics
  const getClinics = () => {
    setLoading(true)
    axios.get('/api/level_1/clinics').then(res => {
      if (res.status === 200) {
        setClinics(res.data.clinics)
        setLoading(false)
      } else {
        setError(res.data.message)
        setLoading(false)
        setTimeout(() => { setError('') }, 5000)
      }
    }).catch(err => {
      setError(err.response.data.message)
      setLoading(false)
      setTimeout(() => { setError('') }, 5000)
    });
  }

  // update exam clinics
  const updateClinics = (e) => {
    e.preventDefault();
    setLoading(true)

    axios.put(`/api/level_1/clinics/${editableClinic.id}`, editableClinic).then(res => {
      if (res.status === 200) {
        getClinics()
        setSuccess(res.data.message)
        setLoading(false)
        setTimeout(() => { setSuccess('') }, 5000)
      } else {
        setError(res.data.message)
        setLoading(false)
        setTimeout(() => { setError('') }, 5000)
      }
    }).catch(err => {
      setError(err.response.data.message)
      setLoading(false)
      setTimeout(() => { setError('') }, 5000)
    });
  }

  // delete exam clinics
  const deleteClinics = () => {
    let deletableId = { deletableId: selectedClinics.map((clinic) => clinic.id) }

    Swal.fire({
      title: 'Are you sure to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1976D2',
      cancelButtonColor: '#707070',
      confirmButtonText: 'Yes, delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        axios.post('/api/level_1/clinics/delete', deletableId).then(res => {
          if (res.status === 200) {
            getClinics()
            setSelectedClinics([])
            setSuccess(res.data.message)
            setLoading(false)
            setTimeout(() => { setSuccess('') }, 5000)
          } else {
            setError(res.data.message)
            setLoading(false)
            setTimeout(() => { setError('') }, 5000)
          }
        }).catch(err => {
          setError(err.response.data.message)
          setLoading(false)
          setTimeout(() => { setError('') }, 5000)
        });
      }
    })
  }

  // datatable columns
  const columns = [
    {
      name: 'Clinic ID',
      selector: row => row.clinic_id,
      sortable: true,
      width: '110px',
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Contact',
      selector: row => <div>
        <a href={`tel:+${row.phone}`}><i className='fas fa-phone-alt'></i> {row.phone}</a> <br />
        <a href={`mailto:${row.email}`} target='_blank' rel="noreferrer"><i className='fas fa-envelope'></i> {row.email}</a></div>,
      wrap: true,
    },
    {
      name: 'Action',
      cell: (row) => <button className="btn btn-secondary btn-sm px-2" onClick={(e) => { setEditableClinic(row) }}
        data-mdb-toggle="modal" data-mdb-target="#editClinicModal"> <i className="fas fa-edit" ></i></button >,
      button: true,
    }
  ]


  useEffect(() => {
    getClinics()
  }, [])

  useEffect(() => {
    const result = clinics.filter((clinic) => {
      return clinic.clinic_id.toString().match(searchClinic)
        || clinic.name.toLowerCase().match(searchClinic.toLowerCase())
        || clinic.address.toLowerCase().match(searchClinic.toLowerCase())
        || clinic.phone.toLowerCase().match(searchClinic.toLowerCase())
        || clinic.email.toLowerCase().match(searchClinic.toLowerCase())
    })
    setFilteredClinic(result)
  }, [clinics, searchClinic])

  return (
    <div className='card border'>
      <div className='card-header'>
        <h5 className='mt-3'>Clinics</h5>
      </div>
      <div className='card-body pt-2'>
        <DataTable
          title={
            <div>
              <div className="w-100 d-flex align-items-center justify-content-between my-2">
                <div className="input-group w-50">
                  <div className="input-group-text border-0 ps-0"><i className='fas fa-search'></i></div>
                  <input type="text" className="form-control bb-input" placeholder="Search clinic" value={searchClinic} onChange={(e) => setSearchClinic(e.target.value)} />
                </div>
                <button className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#addClinicModal">Add Clinic</button>
              </div>
            </div>
          }
          columns={columns}
          data={filteredClinic}
          pagination
          responsive
          highlightOnHover
          noDataComponent={loading ? <span className="spinner-border" role="status" aria-hidden="true"></span> : 'No data found'}
          selectableRows
          selectableRowsHighlight
          onSelectedRowsChange={data => setSelectedClinics(data.selectedRows)}
          contextActions={<button className="btn btn-danger me-2 px-3" onClick={() => deleteClinics()}><i className="fas fa-trash-alt"></i></button>}
          clearSelectedRows={loading}
        />
      </div>


      {/* Add clinic modal */}
      <div className="modal" id="addClinicModal" data-mdb-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Clinic</h1>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={addClinics}>
              <div className="modal-body p-4">

                <div className="mb-3">
                  <label htmlFor="clinicId" className="form-label">Clinic ID</label>
                  <input type="number" className="form-control" id="clinicId"
                    onChange={(e) => setInputClinics({ ...inputClinics, clinic_id: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name"
                    onChange={(e) => setInputClinics({ ...inputClinics, name: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone"
                    onChange={(e) => setInputClinics({ ...inputClinics, phone: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email"
                    onChange={(e) => setInputClinics({ ...inputClinics, email: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea className="form-control" id="address" rows="2"
                    onChange={(e) => setInputClinics({ ...inputClinics, address: e.target.value })}></textarea>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">
                  {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    : 'Add Clinic'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div >


      {/* Edit clinic modal */}
      <div className="modal" id="editClinicModal" data-mdb-backdrop="static" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{editableClinic.name}</h1>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={updateClinics}>
              <div className="modal-body p-4">

                <div className="mb-3">
                  <label htmlFor="clinicId" className="form-label">Clinic ID</label>
                  <input type="number" value={editableClinic.clinic_id} className="form-control"
                    onChange={(e) => setEditableClinic({ ...editableClinic, clinic_id: e.target.value })} id="clinicId" />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" value={editableClinic.name} className="form-control"
                    onChange={(e) => setEditableClinic({ ...editableClinic, name: e.target.value })} id="name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" value={editableClinic.phone} className="form-control"
                    onChange={(e) => setEditableClinic({ ...editableClinic, phone: e.target.value })} id="phone" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" value={editableClinic.email} className="form-control"
                    onChange={(e) => setEditableClinic({ ...editableClinic, email: e.target.value })} id="email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea className="form-control" value={editableClinic.address} rows="2"
                    onChange={(e) => setEditableClinic({ ...editableClinic, address: e.target.value })}></textarea>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">
                  {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    : 'Save changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div >


      {/* utilities */}
      <CustomSnackbar message={error} status={'error'} />
      <CustomSnackbar message={success} status={'success'} />
    </div>
  )
}
