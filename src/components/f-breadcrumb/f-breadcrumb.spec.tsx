import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FBreadcrumb } from './f-breadcrumb';

describe('f-breadcrumb', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FBreadcrumb],
            template: () => <f-breadcrumb></f-breadcrumb>
        });
        expect(root).toEqualHtml(`
            <f-breadcrumb>
                <div class="f-breadcrumb">
                    f-breadcrumb
                </div>
            </f-breadcrumb>
        `)
    })
})