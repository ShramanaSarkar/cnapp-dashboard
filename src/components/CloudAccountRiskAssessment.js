import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccountRiskAssessment = () => {
  const data = {
    labels: ['Failed', 'Warning', 'Not available', 'Passed'],
    datasets: [
      {
        data: [1689, 681, 36, 7253],
        backgroundColor: ['#B91C1C', '#FACC15', '#E5E7EB', '#22C55E'],
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
      {/* Title on Top */}
      <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '16px' }}>
        Cloud Account Risk Assessment
      </div>

      {/* Body */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Doughnut Chart with Centered Text */}
        <div style={{ width: '150px', height: '150px', position: 'relative' }}>
          <Doughnut data={data} options={options} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>9659</div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Total</div>
          </div>
        </div>

        {/* Legend */}
        <div style={{ marginLeft: '30px' }}>
          {[
            { label: 'Failed', value: 1689, color: '#B91C1C' },
            { label: 'Warning', value: 681, color: '#FACC15' },
            { label: 'Not available', value: 36, color: '#E5E7EB' },
            { label: 'Passed', value: 7253, color: '#22C55E' },
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: item.color,
                borderRadius: '2px',
                marginRight: '8px',
              }}></div>
              <span>{item.label} ({item.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudAccountRiskAssessment;
