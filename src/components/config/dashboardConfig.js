// dashboardConfig.js
import CloudAccounts from '../CloudAccounts';
import CloudAccountRiskAssessment from '../CloudAccountRiskAssessment';
import TopNamespaceAlerts from '../TopNamespaceAlerts';
import WorkloadAlerts from '../WorkloadAlerts';
import ImageRiskAssessment from '../ImageRiskAssessment';
import ImageSecurityIssues from '../ImageSecurityIssues';
  
  export const dashboardConfig = {
    CSPM: {
      title: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'cloudAccounts', label: 'Cloud Accounts', component: <CloudAccounts /> },
        { id: 'cloudAccountRiskAssessment', label: 'Cloud Account Risk Assessment', component: <CloudAccountRiskAssessment /> }
      ]
    },
    CWPP: {
      title: 'CWPP Dashboard',
      widgets: [
        { id: 'topNamespaceAlerts', label: 'Top 5 Namespace Specific Alerts', component: <TopNamespaceAlerts /> },
        { id: 'workloadAlerts', label: 'Workload Alerts', component: <WorkloadAlerts /> }
      ]
    },
    Registry: {
      title: 'Registry Scan',
      widgets: [
        { id: 'imageRiskAssessment', label: 'Image Risk Assessment', component: <ImageRiskAssessment /> },
        { id: 'imageSecurityIssues', label: 'Image Security Issues', component: <ImageSecurityIssues /> }
      ]
    }
  };
  