import $ from 'jquery';
import Bb from 'backbone';

const Contract = Bb.Model.extend({
  defaults: {
    title: '',
    body: ''
  }
});

export default Contract;
