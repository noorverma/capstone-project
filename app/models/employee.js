import mongoose from 'mongoose';

// Define the schema for Employee
const EmployeeSchema = new mongoose.Schema({
  employeeId: { 
    type: String, 
    required: [true, 'Employee ID is required'], 
    unique: true 
  },
  password: { 
    type: String, 
    required: [true, 'Password is required']
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  phone: { 
    type: String, 
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Please fill a valid phone number']
  },
  address: { 
    type: String, 
    required: [true, 'Address is required']
  },
  role: { 
    type: String, 
    required: [true, 'Role is required'], 
    enum: ['employee', 'manager'],
    default: 'employee'
  },
}, {
  timestamps: true // Automatically add createdAt and updatedAt timestamps
});

// Create the Employee model if it doesn't already exist
const Employee = mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema);

export default Employee;