import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FBadge } from './f-badge';

describe('f-badge', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FBadge],
            template: () => <f-badge></f-badge>
        });
        expect(root).toEqualHtml(`
            <f-badge>
                <div class="f-badge">
                    f-badge
                </div>
            </f-badge>
        `)
    })
})