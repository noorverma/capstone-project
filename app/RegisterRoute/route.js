import { NextResponse } from "next/server";
import { connectToDatabase } from "../lib/MongoDB";
import Employee from "../models/employee";

export async function POST(req) {
  try {
    const { employeeId, password, email, phone, address, role } = await req.json();

    // Log the received data for debugging
    console.log("Received data:", { employeeId, password, email, phone, address, role });

    await connectToDatabase();

    const newEmployee = new Employee({
      employeeId,
      password,
      email,
      phone,
      address,
      role,
    });

    await newEmployee.save();

    return NextResponse.json({ message: 'Employee registered successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error registering employee:', error);
    if (error.errors) {
      Object.keys(error.errors).forEach(key => {
        console.error(`${key}: ${error.errors[key].message}`);
      });
    }
    return NextResponse.json({ error: 'Error registering employee.', details: error.message }, { status: 500 });
  }
}