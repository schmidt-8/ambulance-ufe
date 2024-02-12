import { newSpecPage } from '@stencil/core/testing';
import { SschAmbulanceWlList } from '../ssch-ambulance-wl-list';

describe('ssch-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SschAmbulanceWlList],
      html: `<ssch-ambulance-wl-list></ssch-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ssch-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ssch-ambulance-wl-list>
    `);
  });
});
