import { BarChart } from "chartist";
import DashboardMenu from "../../components/DashBoardComponent";

const AdminPage = {
  after_render: () => {
    DashboardMenu.after_render();
  },
  render: async () => {
    return `
    ${DashboardMenu.render({ selected: "dashboard" })}
    `;
  },
};

export default AdminPage;
