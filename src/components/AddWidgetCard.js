import React, { useState } from 'react';
import AddWidgetDrawer from './AddWidgetDrawer';

const AddWidgetCard = ({ onAddWidgets }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleConfirm = (selectedWidgetIds) => {
    onAddWidgets(selectedWidgetIds);
  };

  return (
    <>
      <div
        onClick={() => setDrawerOpen(true)}
        style={{
          border: '1px solid #e5e7eb',
          padding: '40px',
          backgroundColor: '#f9fafb',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '250px',
          borderRadius: '12px',
          boxShadow:
            '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
          height: '100%',
          cursor: 'pointer',
        }}
      >
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 20px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#fff',
            color: '#374151',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          <span style={{ marginRight: '8px', fontSize: '18px' }}>+</span> Add Widget
        </button>
      </div>

      <AddWidgetDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default AddWidgetCard;
