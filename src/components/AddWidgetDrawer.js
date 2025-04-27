import React, { useState } from "react";
import {
  Drawer,
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
} from "@mui/material";
import { dashboardConfig } from "./config/dashboardConfig";
const AddWidgetDrawer = ({ open, onClose, onConfirm }) => {
  const [selectedTab, setSelectedTab] = useState("CSPM");
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleToggle = (widgetId) => {
    setSelectedWidgets((prev) =>
      prev.includes(widgetId)
        ? prev.filter((id) => id !== widgetId)
        : [...prev, widgetId]
    );
  };

  const handleConfirm = () => {
    onConfirm(selectedWidgets);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "33.33vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <div style={{ backgroundColor: "#1E1E88", padding: "16px 24px" }}>
        <h3 style={{ margin: 0, color: "#fff", fontWeight: "500" }}>
          Add Widget
        </h3>
      </div>

      <div style={{ padding: "16px 24px" }}>
        <p style={{ fontWeight: 500, marginBottom: "12px" }}>
          Personalise your dashboard by adding the following widget
        </p>

        <Tabs
          value={selectedTab}
          onChange={(e, value) => setSelectedTab(value)}
        >
          {Object.keys(dashboardConfig).map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>

        <div style={{ marginTop: "16px" }}>
          {dashboardConfig[selectedTab].widgets.map((widget) => (
            <FormControlLabel
              key={widget.id}
              control={
                <Checkbox
                  checked={selectedWidgets.includes(widget.id)}
                  onChange={() => handleToggle(widget.id)}
                />
              }
              label={widget.label}
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            />
          ))}
        </div>
      </div>

      <Divider sx={{ marginTop: "auto" }} />

      <div
        style={{
          padding: "16px 24px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={onClose} style={{ marginRight: "16px" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleConfirm}
          style={{
            backgroundColor: "#1E1E88",
            color: "#fff",
          }}
        >
          Confirm
        </Button>
      </div>
    </Drawer>
  );
};

export default AddWidgetDrawer;
