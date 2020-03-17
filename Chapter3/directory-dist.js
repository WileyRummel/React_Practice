"use strict";

(function () {
  "use strict";

  function Filters(props) {
    var titles = window.LMDirectory.titles;

    function updateName(evt) {
      props.updateFormState("currentName", evt.target.value);
    }

    function updateTitle(evt) {
      props.updateFormState("currentTitle", evt.target.value);
    }

    function updateIntern(evt) {
      props.updateFormState("isIntern", evt.target.checked);
    }

    function resetForm() {
      props.updateFormState("currentName", "");
      props.updateFormState("currentTitle", "");
      props.updateFormState("isIntern", false);
    }

    return React.createElement("form", {
      action: "",
      id: "directory-filters"
    }, React.createElement("div", {
      className: "group"
    }, React.createElement("label", {
      htmlFor: "person-name"
    }, "Name:"), React.createElement("input", {
      type: "text",
      name: "person",
      placeholder: "Name of employee",
      id: "txt-name",
      value: props.currentName,
      onChange: updateName
    })), React.createElement("div", {
      className: "group"
    }, React.createElement("label", {
      htmlFor: "person-title"
    }, "Job Title:"), React.createElement("select", {
      name: "person_name",
      id: "person-title",
      value: props.currentTitle,
      onChange: updateTitle
    }, React.createElement("option", {
      value: ""
    }, "-Select "), titles.map(function (title) {
      return React.createElement("option", {
        value: title.key,
        key: title.key
      }, " ", title.display);
    }))), React.createElement("div", {
      className: "group"
    }, React.createElement("label", null, React.createElement("input", {
      type: "checkbox",
      value: "1",
      name: "person_intern",
      checked: props.isIntern,
      onChange: updateIntern
    }), " Intern")), React.createElement("div", {
      className: "group"
    }, React.createElement("label", null, React.createElement("input", {
      type: "reset",
      value: "Reset",
      onClick: resetForm
    }))));
  }

  ;

  function People(props) {
    return React.createElement("div", {
      className: "results"
    }, React.createElement(ReactTransitionGroup.TransitionGroup, null, props.people.map(function (person) {
      return React.createElement(ReactTransitionGroup.CSSTransition, {
        key: person.id,
        classNames: "fade",
        timeout: 2000
      }, React.createElement(Person, {
        person: person
      }));
    })));
  }

  ;

  function Person(props) {
    return React.createElement("div", {
      className: "person"
    }, React.createElement("h3", null, props.person.name, ",", props.person.title), React.createElement("p", null, React.createElement("img", {
      className: "size-medium alignright",
      src: props.person.img,
      alt: props.person.name,
      width: "300",
      height: "300",
      sizes: "(max-width: 300px) 100vw, 300px"
    }), props.person.bio));
  }

  class Directory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        people: window.LMDirectory.people,
        currentName: "",
        currentTitle: "",
        isIntern: false
      };
      this.updateFormState = this.updateFormState.bind(this); // this.resetFormState = this.resetFormState.bind(this)
    }

    updateFormState(name, val) {
      this.setState({
        [name]: val
      }, this.updatePeopleList);
    } // resetFormState(name, val) {
    //   this.setState({
    //     currentName: "",
    //     currentTitle: "",
    //     isIntern: false,
    //   })
    // }


    updatePeopleList() {
      var filteredPeople = window.LMDirectory.people.filter(function (person) {
        return person.intern === this.state.isIntern && (this.state.currentName === "" || person.name.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !== -1) && (this.state.currentTitle === "" || person.title_cat === this.state.currentTitle);
      }.bind(this));
      this.setState({
        people: filteredPeople
      });
    }

    render() {
      return React.createElement("div", {
        className: "company-directory"
      }, React.createElement("h2", null, "Company Directory"), React.createElement("p", null, "Learn more about each person at Leaf & Mortar in this company directory."), React.createElement(Filters, {
        currentName: this.state.currentName,
        currentTitle: this.state.currentTitle,
        isIntern: this.state.isIntern,
        updateFormState: this.updateFormState
      }), React.createElement(People, {
        people: this.state.people
      }));
    }

  }

  ;
  ReactDOM.render(React.createElement(Directory, null), document.getElementById("directory-root"));
})();
//# sourceMappingURL=directory-dist.js.map