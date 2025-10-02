import { useState, useContext } from "react";
import SearchForm from "./SearchForm";
import { SearchContext } from "../../context";
import MetricCards from "../Results/MetricCards";
import ResultsTable from "../Results/ResultsTable";

const SearchPage = () => {
  const [filterType, setFilterType] = useState("");
  const [keyword, setKeyword] = useState("");

  const {
    results,
    setResults,
    status,
    setStatus,
    error,
    setError
  } = useContext(SearchContext);

  const handleSearch = async () => {
    setStatus("loading");
    setError(null);

    try {
      const query = keyword ? `?filterType=${filterType}&keyword=${keyword}` : "";
      const response = await fetch(`/api/data/search${query}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const rawData = await response.json();

      const mappedData = rawData.map((record) => ({
        user_id: record["User ID"],
        device_model: record["Device Model"],
        operating_system: record["Operating System"],
        app_usage_time: record["App Usage Time (min/day)"],
        screen_on_time: record["Screen On Time (hours/day)"],
        battery_drain: record["Battery Drain (mAh/day)"],
        apps_installed: record["Number of Apps Installed"],
        data_usage: record["Data Usage (MB/day)"],
        age: record["Age"],
        gender: record["Gender"],
        user_behavior_class: record["User Behavior Class"]
      }));

      setResults(mappedData);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="container mt-4">
      <SearchForm
        onSearch={handleSearch}
        keyword={keyword}
        setKeyword={setKeyword}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      {status === "loading" && (
        <div className="text-center text-muted fw-bold mt-4">Loading Records...</div>
      )}

      {status === "error" && (
        <div className="text-danger fw-bold mb-3">{error}</div>
      )}

      {status === "success" && results.length === 0 && (
        <div className="text-muted fw-bold mt-3">No Records To Display</div>
      )}

      {status === "success" && results.length > 0 && (
        <p>Displaying {results.length.toLocaleString("en-US")} Records</p>
      )}

      <MetricCards results={results} />

      <ResultsTable
        data={results}
        isLoading={status === "loading"}
        error={status === "error" ? error : null}
      />
    </div>
  );
};

export default SearchPage;
