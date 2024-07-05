import { TagPadrao } from "./Tag"

const Tag = ({ titulo }) => {
  return (
    <TagPadrao $titulo={titulo}>
      {titulo}
    </TagPadrao>
  )
}

export default Tag