import { h } from "hyperapp"

const Header = (state) =>
  <header class="flex-row">
    <img class="ambigram" src={state.logo} alt="logo lea sharon harabagiu" style={{height: '197px', marginLeft:'10px', marginRight:'10px'}}/>
    <div class="flex-column" style={{alignItems:'flex-end', justifyContent:'flex-end'}}>
      <h1 class="no-margin">Sharon Harabagiu</h1>
      <h2 class="no-margin">creative engineer</h2>
    </div>
  </header>

export default Header