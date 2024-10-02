// src/components/ReportsLayout/ReportsLayout.js
import React from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
    return (
        <div className="reports-container">
            <h1>Your Reports</h1>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Report Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Download Report</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data - replace with actual data from state or props */}
                    <tr>
                        <td>Annual Health Report</td>
                        <td>2024-01-15</td>
                        <td>Completed</td>
                        <td><button>View</button></td>
                        <td><button>Download Report</button></td>
                    </tr>
                    <tr>
                        <td>Monthly Fitness Report</td>
                        <td>2024-02-01</td>
                        <td>Pending</td>
                        <td><button>View</button></td>
                        <td><button>Download Report</button></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;
