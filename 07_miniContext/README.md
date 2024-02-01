## What is the need of context API?
You're developing an app.

You have a dashboard component, which has another container.
This container contains some card elements. This card component needs some props for customization.

But this card compnent is nested inside the parent container component.
This parent component is nested inside the dashboard component. Now, for the card component to get the required props,
the props need to be passed to dashboard first, and from then to the container, and from container to the card.

This forms a much-not-needed prop chain because the other two components don't have any use of the card props.
This leaves us with a thought, _Why can't I pass the props directly to the card component?_.