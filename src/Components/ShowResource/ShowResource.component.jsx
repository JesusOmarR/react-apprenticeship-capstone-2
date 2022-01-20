import React, { useEffect, state, useState } from 'react'

function ShowResource({ source }) {
  return source.includes('youtube') ? (
    <div>
      <iframe
        className="responsive-iframe"
        src={source}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  ) : (
    <div>
      <img src={source} />
    </div>
  )
}

export default ShowResource
