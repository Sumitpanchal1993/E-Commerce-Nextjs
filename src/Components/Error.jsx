import React from 'react'
import "./Error.css"

function Error({ title = "Something went wrong", message = "An unexpected error occurred.", onRetry }) {
  
    return (
    <div className="errorContainer">
      <div className="errorBox">
        <h1 className="errorTitle">⚠️ {title}</h1>
        <p className="errorMessage">{message}</p>
        {onRetry && (
          <button className="retryButton" onClick={onRetry}>
            🔄 Retry
          </button>
        )}
      </div>
    </div>
  );
  
}

export default Error