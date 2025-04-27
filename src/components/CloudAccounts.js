import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccounts = () => {
  const data = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ['#4F46E5', '#E0E7FF'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      padding: '20px',
      backgroundColor: '#f9fafb',
      borderRadius: '12px',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
      minHeight: '250px',
      minWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '16px' }}>
        Cloud Accounts
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ width: '150px', height: '150px', position: 'relative' }}>
        <Doughnut data={data} options={options} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>2</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>Total</div>
        </div>
      </div>

      <div style={{ marginLeft: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#4F46E5',
            borderRadius: '2px',
            marginRight: '8px'
          }}></div>
          <span>Connected (2)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#E0E7FF',
            borderRadius: '2px',
            marginRight: '8px'
          }}></div>
          <span>Not Connected (2)</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CloudAccounts;
