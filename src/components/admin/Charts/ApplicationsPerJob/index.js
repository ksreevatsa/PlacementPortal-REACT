import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { getApplicationsPerJob } from "../../../../api/getApplicationsPerJob";
import { message } from "antd";

export const ApplicationPerJob = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getApplicationsPerJob();
      const responseData = response.data;
      setData(responseData);

      message.success("Data fetched successfully");
    } catch (error) {
      message.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="jobTitle" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="applications" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
