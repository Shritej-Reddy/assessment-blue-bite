import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ImageComponent } from './components/ImageComponent';
import { WeatherComponent } from './components/WeatherComponent';
import { ButtonComponent } from './components/ButtonComponent';
import { ConditionComponent } from './components/ConditionComponent';

interface PageData {
  lists: Array<{ id: number; components: number[] }>;
  components: Array<{
    id: number;
    type: string;
    options: any;
    children?: number;
  }>;
  variables?: Array<{ name: string; type: string; initialValue: any }>;
}

const App: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [variables, setVariables] = useState<Record<string, any>>({});

  useEffect(() => {
    fetch(`http://localhost:3030/page/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPageData(data.data);
        if (data.data.variables) {
          const initialVars = data.data.variables.reduce(
            (acc: any, v: any) => ({ ...acc, [v.name]: v.initialValue }),
            {}
          );
          setVariables(initialVars);
        }
      });
  }, [id]);

  const updateVariable = (name: string, value: any) => {
    setVariables((prev) => ({ ...prev, [name]: value }));
  };

  const renderComponent = (component: any) => {
    const { type, options, children } = component;
    switch (type) {
      case 'image':
        return <ImageComponent key={component.id} options={options} />;
      case 'weather':
        return <WeatherComponent key={component.id} options={options} />;
      case 'button':
        return (
          <ButtonComponent
            key={component.id}
            options={options}
            updateVariable={updateVariable}
          />
        );
      case 'condition':
        return (
          <ConditionComponent
            key={component.id}
            options={options}
            variables={variables}
          >
            {children !== undefined &&
              pageData?.lists[children].components.map((compId) =>
                renderComponent(
                  pageData.components.find((c) => c.id === compId)
                )
              )}
          </ConditionComponent>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {pageData?.lists[0].components.map((compId) =>
        renderComponent(pageData.components.find((c) => c.id === compId))
      )}
    </div>
  );
};

export default App;
