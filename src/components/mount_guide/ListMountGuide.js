import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Panel, PanelGroup } from 'react-bootstrap';
import './MountGuide.css';

class ListMountGuide extends Component{

  showReputationList(){
    return this.props.mount_reput.map((mount) => {
      return(
        <li key={mount.id} >
          <span>{mount.info}</span>
        </li>
      );
    })
  } 

  showPvPList(){
    return this.props.mount_pvp.map((mount) => {
      return(
        <li key={mount.id} >
          <span>{mount.info}</span>
        </li>
      );
    })
  } 

  showProffMountList(){
    return this.props.mount_proff.map((mount) => {
      return(
        <li key={mount.id} >
          <span>{mount.info}</span>
        </li>
      );
    })
  } 

  showPvEList(){
    return this.props.mount_pve.map((mount) => {
      return(
        <li key={mount.id} >
          <span>{mount.info}</span>
        </li>
      );
    })
  }

  showMountQuestList(){
    return this.props.mount_quest.map((mount) => {
      return(
        <li key={mount.id} >
          <span>{mount.info}</span>
        </li>
      );
    })
  }  

  showMountSilverTournament(){
    return this.props.mount_silver.map((mount) => {
      return(
        <li key={mount.id} >
          <span>{mount.info}</span>
        </li>
      );
    })
  } 

  showMountGameEvents(){
    return this.props.mount_event.map((mount) => {
      return(
        <li key={mount.id} >
          <span>{mount.info}</span>
        </li>
      );
    })
  }  

  showMountPersonalCabinet(){
    return this.props.mount_cabinet.map((mount) => {
      return(
        <li key={mount.id} >
          <span>{mount.info}</span>
        </li>
      );
    })
  }



  render(){
    return(
      <PanelGroup accordion id="accordion-uncontrolled-example" className="bgPanel">

                <Panel eventKey="1" className="bgPanelBlock">
                  <Panel.Heading className="bgPanelHeading">
                    <Panel.Title toggle>
                      ЗА РЕПУТАЦИЮ
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible className="bgPanelTitle">
                    <h4>ЗА РЕПУТАЦИЮ</h4><br/>
                    <ol>
                      {this.showReputationList()}
                    </ol>
                  </Panel.Body>
                </Panel>

                <Panel eventKey="2" className="bgPanelBlock">
                  <Panel.Heading className="bgPanelHeading">
                    <Panel.Title toggle>
                      ПВП
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible className="bgPanelTitle">
                    <h4>ПВП</h4><br/>
                    <ol>{this.showPvPList()}</ol>
                  </Panel.Body>
                </Panel>

                <Panel eventKey="3" className="bgPanelBlock">
                  <Panel.Heading className="bgPanelHeading">
                    <Panel.Title toggle>
                      МАУНТЫ ПРОФЕССИЙ
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible className="bgPanelTitle">
                    <h4>МАУНТЫ ПРОФЕССИЙ</h4><br/>
                    <ol>{this.showProffMountList()}</ol>
                  </Panel.Body>
                </Panel>

                <Panel eventKey="4" className="bgPanelBlock">
                  <Panel.Heading className="bgPanelHeading">
                    <Panel.Title toggle>
                      ПВЕ
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible className="bgPanelTitle">
                    <h4>ПВЕ</h4><br/>
                    <ol>{this.showPvEList()}</ol>
                  </Panel.Body>
                </Panel>

                <Panel eventKey="5" className="bgPanelBlock">
                  <Panel.Heading className="bgPanelHeading">
                    <Panel.Title toggle>
                      АЧИВКИ, ПРОСТЫЕ ПРОДАВЦЫ, КВЕСТЫ.
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible className="bgPanelTitle">
                    <h4>Ачивы , простые продавцы , квесты.</h4><br/>
                    <ol>{this.showMountQuestList()}</ol>
                  </Panel.Body>
                </Panel>

                <Panel eventKey="6" className="bgPanelBlock">
                  <Panel.Heading className="bgPanelHeading">
                    <Panel.Title toggle>
                      СЕРЕБРЯННЫЙ ТУРНИР
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible className="bgPanelTitle">
                    <h4>СЕРЕБРЯННЫЙ ТУРНИР</h4><br/>
                    <ol>{this.showMountSilverTournament()}</ol>
                  </Panel.Body>
                </Panel>

                <Panel eventKey="7" className="bgPanelBlock">
                  <Panel.Heading className="bgPanelHeading">
                    <Panel.Title toggle>
                    ИГРОВЫЕ СОБЫТИЯ
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible className="bgPanelTitle">
                    <h4>ИГРОВЫЕ СОБЫТИЯ</h4><br/>
                    <ol>{this.showMountGameEvents()}</ol>
                  </Panel.Body>
                </Panel>

                <Panel eventKey="8" className="bgPanelBlock">
                  <Panel.Heading className="bgPanelHeading">
                    <Panel.Title toggle>
                      ИНТЕРЕСНОЕ ИЗ ЛИЧНОГО КАБИНЕТА
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible className="bgPanelTitle">
                    <h4>ИНТЕРЕСНОЕ ИЗ ЛИЧНОГО КАБИНЕТА</h4><br/>
                    <ol>{this.showMountPersonalCabinet()}</ol>
                  </Panel.Body>
                </Panel>

              </PanelGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    mount_reput: state.mount.reputation,
    mount_pvp: state.mount.pvp,
    mount_proff: state.mount.pro_mount,
    mount_pve: state.mount.pve,
    mount_quest: state.mount.quest,
    mount_silver: state.mount.silver,
    mount_event: state.mount.game_event,
    mount_cabinet: state.mount.personal_cabinet
  }
}

export default connect (mapStateToProps) (ListMountGuide);