import React from 'react';
import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './Types/SimpleOptions';
import { ImageItPanel } from './ImageItPanel';
import { EditorSensorList } from 'CustomEditors/EditorSensorList';

export const plugin = new PanelPlugin<SimpleOptions>(ImageItPanel).setPanelOptions(builder => {
  const panelOptionsBuilder = builder
    .addTextInput({
      path: 'imageUrl',
      name: 'Image URL',
      description: 'URL of base image',
      defaultValue: 'https://i.ibb.co/tLXrjb6/imageit.png',
    })
    .addBooleanSwitch({
      path: 'lockSensors',
      name: 'Lock sensors movement',
      defaultValue: false,
    })
    .addNumberInput({
      path: 'sensorTextSize',
      name: 'Sensor text size',
      description: 'Text size in em. Default 1',
      defaultValue: 1,
    })
    .addCustomEditor({
      id: 'sensors',
      path: 'sensors',
      name: 'Sensors',
      description: 'List of sensors',
      category: ['Sensors'],
      defaultValue: [],
      editor: props => {
        return <EditorSensorList sensors={props.value} onChange={props.onChange} />;
      },
    });

  return panelOptionsBuilder;
});
