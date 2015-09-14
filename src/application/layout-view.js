import {LayoutView} from 'backbone.marionette';
import template from './layout-template.hbs';
import NavbarView from './mainViews/navbar';

export default LayoutView.extend({
  el: '.application',
  template: template,

  regions: {
    //header  : '.application__header',
    flashes : '.application__flashes',
    navbar: '.main__navbar',
    schooltypes: '.main__schooltypes',
    treetoggler: '.main__treetoggler',
    sidebar: '.main__sidebar',
    content: '.main__content',
    overlay : '.application__overlay'
  },

  onRender() {
    this.navbar.show(new NavbarView());
    //this.schooltypes.show(new SchoolTypesView());

  }
});
