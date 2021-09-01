import { NgModule } from '@angular/core';
import { ComponentsModule } from '@shared/components';
import { ContainersModule } from '@shared/containers';
import { MaterialModule } from '@shared/modules/material-module';
@NgModule({
    declarations: [],
    imports: [ComponentsModule, ContainersModule, 
    ],
    exports: [ComponentsModule, ContainersModule, MaterialModule
    ]
})
export class SharedModule { }