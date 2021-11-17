export default function Loading() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '750px' }}>
      <svg
        style={{
          margin: 'auto',
          background: 'rgb(0, 0, 0, 0) none repeat scroll 0% 0%',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width="50px"
        height="50px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="50" cy="50" fill="none" stroke="#53c2ee" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </div>
  )
}