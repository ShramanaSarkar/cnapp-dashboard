import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import AddWidgetCard from "../components/AddWidgetCard";

import { dashboardConfig } from "../components/config/dashboardConfig";
import AddWidgetDrawer from "../components/AddWidgetDrawer";

const Dashboard = () => {
  const [activeWidgets, setActiveWidgets] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddWidgets = (widgetIds) => {
    const newWidgets = widgetIds.filter((id) => !activeWidgets.includes(id));
    setActiveWidgets((prev) => [...prev, ...newWidgets]);
  };

  const handleRemoveWidget = (widgetId) => {
    setActiveWidgets((prev) => prev.filter((id) => id !== widgetId));
  };

  return (
    <Container
      sx={{ backgroundColor: "#f4f7fb", minHeight: "100vh", py: 4, px: 6 }}
      maxWidth="xl"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight="bold">
          CNAPP Dashboard
        </Typography>

        <TextField
          size="small"
          variant="outlined"
          placeholder="Search widgets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: "300px" }}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap={2}
        mb={2}
      >
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setDrawerOpen(true)}
        >
          Add Widget
        </Button>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
        <Select size="small" defaultValue="2d">
          <MenuItem value="2d">Last 2 days</MenuItem>
          <MenuItem value="7d">Last 7 days</MenuItem>
        </Select>
      </Box>

      {Object.entries(dashboardConfig).map(([categoryKey, categoryData]) => (
        <Box key={categoryKey} mt={4}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {categoryData.title}
          </Typography>
          <Grid container spacing={2}>
            {categoryData.widgets
              .filter((widget) =>
                widget.label.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .filter((widget) => activeWidgets.includes(widget.id))
              .map((widget) => (
                <Grid item xs={12} md={4} key={widget.id} width={"30%"}>
                  <Box
                    sx={{ width: "100%", position: "relative", height: "100%" }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleRemoveWidget(widget.id)}
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        backgroundColor: "#fff",
                        boxShadow: 1,
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                    {widget.component}
                  </Box>
                </Grid>
              ))}
            <Grid item xs={12} md={4} width={"30%"}>
              <AddWidgetCard onAddWidgets={handleAddWidgets} />
            </Grid>
          </Grid>
        </Box>
      ))}

      <AddWidgetDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onConfirm={handleAddWidgets}
      />
    </Container>
  );
};

export default Dashboard;
