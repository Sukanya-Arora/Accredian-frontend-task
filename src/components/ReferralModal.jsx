import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
  IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import axios from "axios";


const ReferralModal = ({ open, handleClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    vertical: "",
    yourName: "",
    yourEmail: "",
    yourPhone: ""
  });
  
  const [successMessage, setSuccessMessage] = useState("");

  const steps = ["Friend's details", "Your details"];

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onSubmit = async (data) => {
    const finalData = { ...formData, ...data };
  
    try {
      const response = await axios.post("http://localhost:5000/api/referrals", finalData);
      setSuccessMessage(response.data.message || "Referral submitted successfully!");
    } catch (error) {
      console.error("Error submitting referral:", error.response?.data);
      setSuccessMessage("Failed to submit referral. Please try again.");
    }
  
    reset();
    setFormData({});
    setActiveStep(0);
  };
  

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.modalContainer}>
        <IconButton onClick={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Refer your <span style={{ color: "#007bff" }}>friend!</span>
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <form onSubmit={handleSubmit(handleNext)} style={styles.form}>
            <TextField
              fullWidth
              label="Enter friend's name"
              {...register("friendName", { required: "Friend's name is required" })}
              margin="dense"
              error={errors.friendName}
              helperText={errors.friendName?.message}
              value={formData.friendName} // Ensure controlled component
              onChange={(e) => setFormData({ ...formData, friendName: e.target.value })}
            />
            <TextField
              fullWidth
              label="Enter friend's email"
              {...register("friendEmail", { required:  "Friend's email is required" })}
              type="email"
              margin="dense"
              error={errors.friendEmail}
              helperText={errors.friendEmail?.message}
              value={formData.friendEmail}
              onChange={(e) => setFormData({ ...formData, friendEmail: e.target.value })}

            />
            <TextField
              fullWidth
              label="Friend's phone number"
              {...register("friendPhone", { required:  "Friend's phone number is required" })}
               type="tel"
              margin="dense"
              error={errors.friendPhone}
              helperText={errors.friendPhone?.message}
              value={formData.friendPhone}
              onChange={(e) => setFormData({ ...formData, friendPhone: e.target.value })}
            />
            <TextField
              fullWidth
              select
              label="Select Vertical"
              {...register("vertical", { required: "Please select a vertical" })}
              margin="dense"
              error={errors.vertical}
              helperText={errors.vertical?.message}
              value={formData.vertical}
              onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
            >
              <MenuItem value="" disabled>Select a vertical</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
            </TextField>

            <Button type="submit" variant="contained" fullWidth sx={styles.nextButton}>
              Next
            </Button>
          </form>
        )}

        {activeStep === 1 && (
          <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
            <TextField
              fullWidth
              label="Your Name"
              {...register("yourName", { required: "Your name is required" })}
              margin="dense"
              error={errors.yourName}
              helperText={errors.yourName?.message}
              value={formData.yourName} // Ensure controlled component
              onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
              
            />
            <TextField
              fullWidth
              label="Your Email"
              {...register("yourEmail", { required: "Your email is required" })}
              type="email"
              margin="dense"
              error={errors.yourEmail}
              helperText={errors.yourEmail?.message}
              value={formData.yourEmail} // Ensure controlled component
              onChange={(e) => setFormData({ ...formData, yourEmail: e.target.value })}
            />
            <TextField
              fullWidth
              label="Your Phone"
              {...register("yourPhone", { required: "Your phone no is required" })}
              type="tel"
              margin="dense"
              error={errors.yourPhone}
              helperText={errors.yourPhone?.message}
              value={formData.yourPhone} // Ensure controlled component
              onChange={(e) => setFormData({ ...formData, yourPhone: e.target.value })}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button variant="outlined" onClick={handleBack}>
                Back
              </Button>
              <Button type="submit" variant="contained">
                Submit Referral
              </Button>
            </Box>
          </form>
        )}

          {successMessage && (
            <Typography color="green" sx={{ mt: 2 }}>
              {successMessage}
           </Typography>
          )}

      </Box>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  form: {
    marginTop: 2,
  },
  nextButton: {
    marginTop: 2,
  },
};

export default ReferralModal;
