import React from "react";
import PlayIcon from "../../../assets/icons/PlayIcon";
import "./playlist-detail-body.css";

const PlaylistDetailBody = () => {
  return (
    <div className="p-6 flex mt-6 items-center">
      <button className="playlist-detail-body__play-button mr-6">
        <PlayIcon />
      </button>
      <div className="fill-slate-300 flex pr-5">
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          height="32"
          width="32"
        >
          <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
        </svg>
      </div>
      <div className="fill-slate-300 flex">
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          height="32"
          width="32"
        >
          <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
        </svg>
      </div>
      <div className="ml-auto text-slate-300 fill-white">
        <button
          className="flex space-x-2 items-center"
          type="button"
          role="combobox"
          aria-controls="sortboxlist-ae698d17-90f8-468b-847e-c295e29cd2f3"
          aria-expanded="false"
        >
          <span
            className="Text__TextElement-sc-if376j-0 gYdBJW encore-text-body-small cvTLPmjt6T7M85EKcB8w"
            data-encore-id="text"
          >
            <p className="text-sm font-light">List</p>
          </span>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className=""
            height="16"
            width="16"
          >
            <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlaylistDetailBody;
