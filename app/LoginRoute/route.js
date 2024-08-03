import { NextResponse } from "next/server";
import { connectToDatabase } from "../lib/MongoDB";
import Employee from "../models/employee";

export async function POST(req) {
  try {
    const { employeeId, password } = await req.json();

    await connectToDatabase();

    const employee = await Employee.findOne({ employeeId, password });

    if (employee) {
      return NextResponse.json({ 
        role: employee.role,
        employeeId: employee.employeeId,
        // Include any other non-sensitive information you want to pass to the client
      }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error logging in employee:', error);
    return NextResponse.json({ error: 'Error logging in employee.' }, { status: 500 });
  }
}