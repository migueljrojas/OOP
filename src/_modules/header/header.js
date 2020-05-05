'use strict';
import $ from 'jquery';

export default class Header {
  constructor() {
    const indexitems = $('[data-target]');
    const sections = $('[data-content]');

    indexitems.first().addClass('js-active');
    sections.first().addClass('js-active');

    indexitems.on('click', e => {
      e.preventDefault();
      const $this = $(e.target);
      const currentItemId = $this.data('target');

      
      indexitems.removeClass('js-active');
      sections.removeClass('js-active');
      
      $this.addClass('js-active');
      
      sections.filter((index, el) => {
        return $(el).data('content') === currentItemId;
      }).addClass('js-active');
    });
  }
}
