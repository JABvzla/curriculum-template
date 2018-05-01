import React, { Component } from "react";
import TabContent from "./TabContent";
import SkillBar from "../../components/SkillBar";

class Skills extends Component {

  render() {
    return (
      <TabContent title="Habilidades">
        <p>
          Las siguientes barras porcentuales demuestran el nivel de <b>confianza
          y conform</b> al trabajar con dichos lenguajes, herramienta o frameworks.
        </p>
        <b>Lenguajes & Frameworks</b>
        <SkillBar name="Javascript" percent="95%"/>
        <SkillBar sub name="Adonis" percent="86%"/>
        <SkillBar sub name="React" percent="96%"/>
        <SkillBar sub name="React-Native" percent="90%"/>
        <SkillBar sub name="Angular" percent="75%"/>
        <SkillBar sub name="Firebase" percent="80%"/>
        <br/>
        <SkillBar name="PHP" percent="92%"/>
        <SkillBar sub name="Laravel" percent="95%"/>
        <br/>
        <SkillBar name="Java" percent="75%"/>
        <SkillBar sub name="Spring" percent="80%"/>
        <br/>
        <SkillBar name="SQL" percent="95%"/>
        <SkillBar name="JQL" percent="85%"/>
        <br/>
        <b>Otros</b>
        <SkillBar name="BASH" percent="99%"/>
        <SkillBar name="GIT" percent="99%"/>
        <SkillBar name="CSS" percent="99%"/>
        <SkillBar sub name="SASS" percent="93%"/>
        <SkillBar sub name="LESS" percent="92%"/>
        <SkillBar name="HTML" percent="99%"/>
        <SkillBar sub name="JADE" percent="80%"/>
        <SkillBar name="GULP" percent="99%"/>
      </TabContent>
    );
  }

}

export default Skills;
