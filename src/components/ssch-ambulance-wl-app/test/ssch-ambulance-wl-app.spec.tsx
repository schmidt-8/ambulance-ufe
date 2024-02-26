import { newSpecPage } from '@stencil/core/testing';
import { SschAmbulanceWlApp } from '../ssch-ambulance-wl-app';

describe('<pfx>-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [SschAmbulanceWlApp],
      html: `<ssch-ambulance-wl-app base-path="/"></ssch-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("ssch-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [SschAmbulanceWlApp],
      html: `<ssch-ambulance-wl-app base-path="/ambulance-wl/"></ssch-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("ssch-ambulance-wl-list");
  });
});