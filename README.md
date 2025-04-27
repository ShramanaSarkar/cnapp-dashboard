# CNAPP Dashboard Builder

A dynamic **Dashboard Builder** where users can **add**, **remove**, and **search** widgets across multiple categories (sections) like **CSPM Executive Dashboard**, **CWPP Dashboard**, etc.

Built with **ReactJS** and **Material UI (MUI)**.

---

## 🚀 Project Requirements

- The Dashboard is generated dynamically from a **JSON configuration**.
  - JSON contains **categories** (sections).
  - Each category contains **multiple widgets**.

- **Add Widget** functionality:
  - Users can click on **"+ Add Widget"** to add a new widget.
  - A form will appear to enter:
    - Widget Name
    - Widget Text (Content)
  - The new widget gets added dynamically to the selected category.

- **Remove Widget** functionality:
  - Each widget has a **cross icon** to remove it from a category.
  - Alternatively, users can manage widget assignments from the **Add Category** section by unchecking widgets.

- **Search Widgets** functionality:
  - Users can **search** for existing widgets across all categories.

- **Widget Content:**
  - For demo purposes, each widget contains **random text** instead of real charts or data.

---

## 🛠️ Technologies Used

- **ReactJS** (Frontend Library)
- **Material UI (MUI)** (UI Components and Styling)
- **React Hooks** (for state management)
- **Custom JSON structure** to manage Dashboard state dynamically

---

## 📦 How to Install

```bash
# 1. Clone the repository
git clone https://github.com/ShramanaSarkar/cnapp-dashboard.git

# 2. Navigate to the project directory
cd cnapp-dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will be running at:  
👉 `http://localhost:3000`

---

## 📂 Folder Structure

```
/src
  /components
    DashboardPage.jsx
    Widget.jsx
    AddWidgetDialog.jsx
    WidgetList.jsx
  /data
    dashboardConfig.json
  /utils
    uuid.js
  App.js
  index.js
```

---

## 📋 Future Improvements

- Save the dashboard layout to **localStorage** or **backend** (persistence).
- Drag and drop widgets for better user control.
- Better confirmation modals before deleting widgets.

---

## 📢 Important Notes

- Widget content is **random text** for assignment/demo purposes.
- Fully **responsive** layout using Material UI's `Grid` system.
- Clean and modular React component structure.

---

