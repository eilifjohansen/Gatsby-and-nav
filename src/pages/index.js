import React from "react"
import Lenke from "nav-frontend-lenker"
import Panel from "nav-frontend-paneler"
import { Input } from "nav-frontend-skjema"
import { Hovedknapp } from "nav-frontend-knapper"
import { Systemtittel } from "nav-frontend-typografi"
import { Normaltekst } from "nav-frontend-typografi"
import "./index.less"
const FileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-external-link"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
    <line x1="10" y1="14" x2="20" y2="4" />
    <polyline points="15 4 20 4 20 9" />
  </svg>
)

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section">
          <Panel border>
            <div className="innerpanel">
              <Systemtittel className="innholdstittel">
                Er nettsiden din tilgjengelig for alle?
              </Systemtittel>
              <Normaltekst className="avsnitt">
                Gi nettsiden din en øyeblikkelig universell utforming sjekk med
                bare ett klikk.
              </Normaltekst>
              <form onSubmit={e => e.preventDefault()}>
                <Input type="url" label="Nettsideadresse" />
                <Hovedknapp name="submit" type="submit" className="hovedknapp">
                  Analyser
                </Hovedknapp>
              </form>
              <Normaltekst className="drevetav">
                Drevet av:{" "}
                <Lenke href="https://pa11y.org/">
                  <span>Pa11y</span>
                  <FileIcon />
                </Lenke>
              </Normaltekst>
            </div>
          </Panel>

          <Panel className="resultpanel" border>
            <div className="innerpanel">
              <Systemtittel className="innholdstittel">Resultater</Systemtittel>
              <Normaltekst className="avsnitt">
                Insert ResultDescription here
              </Normaltekst>
              <Normaltekst className="drevetav">
                Drevet av:{" "}
                <Lenke href="https://pa11y.org/">
                  <span>Pa11y</span>
                  <FileIcon />
                </Lenke>
              </Normaltekst>
            </div>
          </Panel>
        </div>
      </header>
    </div>
  )
}
