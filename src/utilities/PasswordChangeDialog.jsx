// PasswordChangeDialog.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import CustomSnackbar from './SnackBar';

export default function PasswordChangeDialog({ onOpen, onClose, mustChange }) {
  const [passwords, setPasswords] = useState({
    oldPass: '',
    newPass: '',
    reNewPass: '',
  });
  const [error, setError] = useState()
  const [success, setSuccess] = useState()
  const [loading, setLoading] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleClose = () => {
    setPasswords({
      oldPass: '',
      newPass: '',
      reNewPass: '',
    });
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPass !== passwords.reNewPass) {
      setError('Password does not match')
      return;
    }
    setLoading(true);

    axios.post('/api/level_1/change-password', passwords).then(res => {
      if (res.status === 200) {
        setSuccess(res.data.message)
        setLoading(false)
        handleClose();
        setTimeout(() => { setSuccess('') }, 5000)
      } else {
        setLoading(false)
        setError(res.data.message)
        setTimeout(() => { setError('') }, 5000)
      }
    }).catch(err => {
      setLoading(false);
      setError(err.response.data.message)
      setTimeout(() => { setError('') }, 5000)
    });
  };

  return (
    <Dialog open={onOpen} onClose={handleClose} aria-labelledby="password-change-dialog-title" aria-describedby="password-change-dialog-description">
      <DialogTitle id="password-change-dialog-title">
        Change your password!
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="password-change-dialog-description" mb={3}>
          {mustChange ? 'Your account is protected by a default password. You must change your password to protect your account.' : ''}
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Old Password"
            type="password"
            name="oldPass"
            value={passwords.oldPass}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="New Password"
            type="password"
            name="newPass"
            value={passwords.newPass}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Re-enter New Password"
            type="password"
            name="reNewPass"
            value={passwords.reNewPass}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleSubmit} autoFocus>
          {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
            'Change Password'}
        </Button>
      </DialogActions>


      {/* utilities */}
      <CustomSnackbar message={error} status={'error'} />
      <CustomSnackbar message={success} status={'success'} />
    </Dialog>
  );
}
