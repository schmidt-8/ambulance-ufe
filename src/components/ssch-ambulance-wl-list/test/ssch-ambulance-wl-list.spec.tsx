import { newSpecPage } from '@stencil/core/testing';
import { SschAmbulanceWlList } from '../ssch-ambulance-wl-list';

describe('ssch-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SschAmbulanceWlList],
      html: `<ssch-ambulance-wl-list></ssch-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as SschAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
