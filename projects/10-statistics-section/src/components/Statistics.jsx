import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";

const metricMapping = {
  downloads: "Downloads",
  paid_users: "Paid users",
  library_images: "Images in library",
};

const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

export default function Statistics({ data, setData }) {
  useEffect(() => {
    async function getStatistics() {
      try {
        const response = await axios.get(
          "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics"
        );
        console.log(response.data.data);
        if (response.status === 200 && response.data) {
          const transformedData = response.data.data.map((item) => ({
            metric: metricMapping[item.metric] || item.metric,
            value: formatNumber(item.value),
          }));
          console.log(transformedData);
          setData(transformedData);
        } else {
          throw new Error("Unexpected response from server");
        }
      } catch (error) {
        console.error("Subscription error:", error);
        setData([]);
      }
    }
    getStatistics();
  }, [setData]);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data.map((statistic) => (
        <div
          key={statistic.metric}
          className="flex flex-col py-6 gap-4 border border-neutral-200 rounded-lg shadow-soft justify-center items-center"
        >
          <p className="text-4xl font-bold text-indigo-700 md:text-5xl">
            {statistic.value}
          </p>
          <p className="text-xl font-normal text-neutral-600">
            {statistic.metric}
          </p>
        </div>
      ))}
    </>
  );
}

Statistics.propTypes = {
  data: PropTypes.array.isRequired, // 修改為 array
  setData: PropTypes.func.isRequired,
};
