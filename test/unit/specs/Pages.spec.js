import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/pages/Home';
import About from '@/pages/About';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
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
