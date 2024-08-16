
import React, { createContext, useContext, useReducer } from 'react';

export const MyContext = createContext();

const initialState = {
    "categories": [
        {
            "name": "CSPM Executive Dashboard",
            "widgets": [
                {
                    "type": "pie_chart",
                    "title": "Cloud Accounts",
                    "data": {
                        "connected": 3,
                        "not_connected": 1
                    },
                    "description": "Displays the proportion of connected vs. not connected cloud accounts."
                },
                {
                    "type": "doughnut_chart",
                    "title": "Cloud Account Risk Assessment",
                    "data": {
                        "failed": 500,
                        "warning": 300,
                        "passed": 7000
                    },
                    "description": "Shows an overview of cloud account risk assessments, helping teams prioritize critical issues."
                },
                {
                    "type": "line_chart",
                    "title": "Security Event Trends",
                    "data": {
                        "january": 100,
                        "february": 150,
                        "march": 200
                    },
                    "description": "Tracks the trend of security events over time to identify patterns and potential threats."
                },
                {
                    "type": "bar_chart",
                    "title": "Compliance Status",
                    "data": {
                        "compliant": 80,
                        "non_compliant": 20
                    },
                    "description": "Displays the compliance status of cloud assets to ensure adherence to security standards."
                },
                {
                    "type": "gauge_chart",
                    "title": "Resource Utilization",
                    "data": {
                        "utilized": 75,
                        "available": 25
                    },
                    "description": "Shows the percentage of utilized vs. available cloud resources to monitor efficiency."
                }
            ]
        },
        {
            "name": "CWPP Dashboard",
            "widgets": [
                {
                    "type": "bar_chart",
                    "title": "Top 5 Namespace Specific Alerts",
                    "data": {
                        "namespace_1": 10,
                        "namespace_2": 20,
                        "namespace_3": 5,
                        "namespace_4": 15,
                        "namespace_5": 8
                    },
                    "description": "Highlights top namespace-specific alerts in your cloud workload protection platform (CWPP)."
                },
                {
                    "type": "heatmap",
                    "title": "Workload Vulnerabilities",
                    "data": {
                        "critical": 5,
                        "high": 15,
                        "medium": 30,
                        "low": 50
                    },
                    "description": "Shows a heatmap of workload vulnerabilities, categorized by severity."
                },
                {
                    "type": "area_chart",
                    "title": "Workload Usage Over Time",
                    "data": {
                        "day_1": 100,
                        "day_2": 200,
                        "day_3": 150
                    },
                    "description": "Tracks workload usage over time to help identify patterns and optimize resource allocation."
                },
                {
                    "type": "stacked_bar_chart",
                    "title": "Top Workload Incidents",
                    "data": {
                        "incident_1": 3,
                        "incident_2": 7,
                        "incident_3": 2
                    },
                    "description": "Displays the most frequent incidents related to cloud workloads."
                },
                {
                    "type": "pie_chart",
                    "title": "Workload Security Posture",
                    "data": {
                        "secure": 90,
                        "insecure": 10
                    },
                    "description": "Provides an overview of the security posture of your workloads."
                }
            ]
        },
        {
            "name": "Registry Scan",
            "widgets": [
                {
                    "type": "bar_chart",
                    "title": "Image Risk Assessment",
                    "data": {
                        "critical": 5,
                        "high": 30,
                        "medium": 60,
                        "low": 120
                    },
                    "description": "Assesses container image risks by severity to prioritize and address the highest risks."
                },
                {
                    "type": "bubble_chart",
                    "title": "Image Vulnerability Distribution",
                    "data": {
                        "vulnerability_1": 100,
                        "vulnerability_2": 150,
                        "vulnerability_3": 50
                    },
                    "description": "Shows the distribution of vulnerabilities across container images."
                },
                {
                    "type": "radar_chart",
                    "title": "Image Security Metrics",
                    "data": {
                        "metric_1": 4.5,
                        "metric_2": 3.0,
                        "metric_3": 4.0
                    },
                    "description": "Visualizes key security metrics for container images."
                },
                {
                    "type": "line_chart",
                    "title": "Vulnerability Trends Over Time",
                    "data": {
                        "month_1": 100,
                        "month_2": 120,
                        "month_3": 90
                    },
                    "description": "Tracks the trend of vulnerabilities over time for better risk management."
                },
                {
                    "type": "doughnut_chart",
                    "title": "Risk Levels by Image Type",
                    "data": {
                        "high_risk": 20,
                        "medium_risk": 50,
                        "low_risk": 100
                    },
                    "description": "Displays the risk levels associated with different image types."
                }
            ]
        }
    ],selectedCategory: null,
    "addscreen": false,
    pss:{
        "name": "CSPM Executive Dashboard",
        "widgets": [
            {
                "type": "pie_chart",
                "title": "Cloud Accounts",
                "data": {
                    "connected": 3,
                    "not_connected": 1
                },
                "description": "Displays the proportion of connected vs. not connected cloud accounts."
            },
            {
                "type": "doughnut_chart",
                "title": "Cloud Account Risk Assessment",
                "data": {
                    "failed": 500,
                    "warning": 300,
                    "passed": 7000
                },
                "description": "Shows an overview of cloud account risk assessments, helping teams prioritize critical issues."
            },
            {
                "type": "line_chart",
                "title": "Security Event Trends",
                "data": {
                    "january": 100,
                    "february": 150,
                    "march": 200
                },
                "description": "Tracks the trend of security events over time to identify patterns and potential threats."
            },
            {
                "type": "bar_chart",
                "title": "Compliance Status",
                "data": {
                    "compliant": 80,
                    "non_compliant": 20
                },
                "description": "Displays the compliance status of cloud assets to ensure adherence to security standards."
            },
            {
                "type": "gauge_chart",
                "title": "Resource Utilization",
                "data": {
                    "utilized": 75,
                    "available": 25
                },
                "description": "Shows the percentage of utilized vs. available cloud resources to monitor efficiency."
            }
        ]
    }             
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'add_widget':
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.name === action.categori
                        ? { ...category, widgets: [...category.widgets, action.payload] }
                        : category
                ),
            };
        case "edit":
          console.log(action);
          
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.name === action.title
                        ? { ...category, widgets: action.payload }
                        : category
                ),
            };

        case "addb":
            return {
                ...state,
                addscreen: true
            };
        case "select_category":
            return {
                ...state,
                selectedCategory: action.payload
            };
        case "close":
            return {
                ...state, addscreen: false
            };
        default:
            console.error(`Unhandled action type: ${action.type}`);
            return state;
    }
};

export const MyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
};
