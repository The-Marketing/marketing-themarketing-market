

const ListItem = () => {
    return (
       
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <div>
          <div className="Text bold">Google</div>
          <div className="Text faded">Faça login com conta do Google.</div>
        </div>
        <div>
          <div className="Text bold">Facebook</div>
          <div className="Text faded">Faça login com conta do Facebook.</div>
        </div>
        </div>
    )
}
export default ListItem;