import $ from 'jquery';
import Bb from 'backbone';

const Contract = Bb.Model.extend({
  defaults: {
    title: '',
    body: [],
    read: ''
  }
});

export default Contract;
