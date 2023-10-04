// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useAppContext } from '../../context/context';

const styles = css`


  .example {

   }
`

export default function Header() {
  const { state } = useAppContext();

  return (
    <div>
      <p>{state.title}</p>
    </div>
  )
}