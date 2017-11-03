# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :sizzle,
  ecto_repos: [Sizzle.Repo]

# Configures the endpoint
config :sizzle, SizzleWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "7JuCFDQUrdHxsePDe9UfnoGS28Lq5CrUm8Pmv0xyXRpeQFvDnkDN0QSH4uWc0YPC",
  render_errors: [view: SizzleWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Sizzle.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
