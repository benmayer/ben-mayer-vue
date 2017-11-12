import Vue from 'vue';
import router from '@/router/';

import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import About from '@/pages/About';

describe('NotFound.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NotFound);
    const vm = new Constructor({ router }).$mount();
    expect(vm.$el.querySelector('.page__notfound h1').textContent)
      .to.equal('Damn, you got lost.');
  });
});

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.page__home h1').textContent)
      .to.equal("Hi, I'm Ben. I build things.");
  });
});

describe('About.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(About);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.page__about h1').textContent)
      .to.equal('About Me');
  });
});
