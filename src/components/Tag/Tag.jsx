import './Tag.css'

const Tag = ({tag}) => {
    return(
        <span className="tag">{tag.value }</span>
    )

}
export default Tag;