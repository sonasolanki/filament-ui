import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FTooltip } from './f-tooltip';

describe('f-tooltip', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FTooltip],
            template: () => <f-tooltip></f-tooltip>
        });
        expect(root).toEqualHtml(`
            <f-tooltip>
                <div class="f-tooltip">
                    f-tooltip
                </div>
            </f-tooltip>
        `)
    })
})