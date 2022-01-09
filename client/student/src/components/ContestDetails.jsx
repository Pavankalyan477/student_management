import React from "react";

export default function ContestDetails() {
  return (
    <div className="form">
      <div>
        <label>Title</label>
        <input name="title" type="text" placeholder="Enter the title" />
      </div>
      <div>
        <label>Type</label>
        <input name="type" type="text" placeholder="Enter the type" />
      </div>
      <div>
        <label>Deadline</label>
        <input
          name="deadline"
          type="datetime-local"
          placeholder="Enter the deadline"
        />
      </div>
      <div>
        <label>Tags</label>
        <input name="tags" type="text" placeholder="Enter the tags" />
      </div>
      <div>
        <label>Time</label>
        <input name="time" type="text" placeholder="Enter the time" />
      </div>
      <div>
        <button className="addb">ADD</button>
      </div>
    </div>
  );
}
