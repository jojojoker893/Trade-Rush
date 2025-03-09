#!/bin/bash
set -e

rm -f /TradeRush/tmp/pids/server.pid

exec "$@"